import assert from 'assert';
import { Client } from './client';
import { loginPage, signupPage} from './htmlFrames';
import { Tutor } from './Tutor';

const client = new Client();
    
function getForm ():FormData {
    var data = new FormData();
    var all = document.querySelectorAll("#user_form input, #user_form textarea, #user_form select") as NodeListOf<HTMLInputElement>;
    for (let field of all) {
      if (field.type != "submit" && field.type != "button") { 
        if (field.type=="radio" || field.type=="checkbox") {
          if (field.checked) { data.append(field.name, field.value); }
        }
        else { data.append(field.name, field.value); }
      }
    }
    return data;
  }

function printOutput(outputArea: HTMLElement, message: string): void {
    // append the message to the output area
    outputArea.innerText += message + '\n';

    // scroll the output area so that what we just printed is visible
    outputArea.scrollTop = outputArea.scrollHeight;
}
function pageLoop(mainArea:HTMLElement, state = 2, extra:any = ''){
  if (state == 1){
    //SignUP Page
    const signupButton: HTMLElement = document.getElementById('signUp')??assert.fail('');
    const logInTabButton: HTMLElement = document.getElementById('logInTab')??assert.fail('');
    logInTabButton.addEventListener('click', (event:MouseEvent)=>{
      mainArea.innerHTML = loginPage;
      pageLoop(mainArea, 2);
      return false;
    });
    signupButton.addEventListener('click', (event:MouseEvent)=>{
      const data = getForm();
      var htmlcontent = '';
      if (data.has("tutor")){
        const fullName:string = data.get("fullName") as string;
        const password:string = data.get("password") as string;
        const subject1:string = data.get("subject1") as string;
        const subject2:string = data.get("subject2") as string;
        const avail1:string = data.get("avail1") as string;
        const avail2:string = data.get("avail2") as string;
        const tutor = new Tutor(fullName,[subject1,subject2],[avail1,avail2]);
        htmlcontent = tutor.generateHTML();
        state = 3
        extra = tutor;
      }
      else{
        // htmlcontent = updateTutee(data);
        state =4
      }
      mainArea.innerHTML = htmlcontent;
      pageLoop(mainArea, state, extra);
      return false;
    });
  }else if (state==2){
    //Login page
    const logInButton: HTMLElement = document.getElementById('logIn')??assert.fail('');
    logInButton.addEventListener('click', (event:MouseEvent)=>{
      const data = getForm();
      const name:string = data.get('uname') as string;
      const password:string = data.get('password') as string;
      const clientState = client.checkID(name,password);
      if (clientState>2){
        mainArea.innerHTML = client.getHTMLbyName(name);
        pageLoop(mainArea,clientState);
      }
      return false;
    });
    const signTabButton: HTMLElement = document.getElementById('signUpTab')??assert.fail('');
    signTabButton.addEventListener('click', (event:MouseEvent)=>{
      mainArea.innerHTML = signupPage;
      pageLoop(mainArea, 1);
      return false;
    });
  }else if (state == 3){
    const logTabButton: HTMLElement = document.getElementById('logOutTab')??assert.fail('');
    logTabButton.addEventListener('click', (event:MouseEvent)=>{
      mainArea.innerHTML = loginPage;
      pageLoop(mainArea, 2);
      return false;
    });
    const slider: HTMLInputElement = document.getElementById('myRange') as HTMLInputElement;
    const tuteeSelection: HTMLElement = document.getElementById('tutorTable')??assert.fail('');
    slider.oninput = function(){
      const slider: HTMLInputElement = document.getElementById('myRange') as HTMLInputElement;
      tuteeSelection.innerHTML = client.fetchMatchedTutee(slider.value ,extra);
    };
    //Tutor Page

  }else if (state ==4){
    const logInTabButton: HTMLElement = document.getElementById('logOutTab')??assert.fail('');
    logInTabButton.addEventListener('click', (event:MouseEvent)=>{
      mainArea.innerHTML = loginPage;
      pageLoop(mainArea, 2);
      return false;
    });
    //Tutee Page
  }
  
  

}


async function main(): Promise<void> {
    await client.start();
    const mainArea: HTMLElement = document.getElementById('mainArea') ?? assert.fail('missing main div block');

    mainArea.innerHTML = loginPage;
    pageLoop(mainArea);

    //TODO A bunch of other interaction to get tutor name

    // const tutorName = '';
    // const tutorPassword ='';

    // mainArea.innerHTML = feedTutorData(tutorPage, tutorName, tutorPassword);


    
}

void main();
