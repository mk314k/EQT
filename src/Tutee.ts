
export class Tutee{
    public readonly isFunded = false;
    public readonly availability = '';
    public readonly seekingSubjects = '';
    public readonly photo='';
    public readonly info='';
    public constructor(public readonly name:string, public readonly subjects:Array<string>, public readonly availabilty:Array<string>){
    
    } 

    public generateHTML():string{
        return `
        <div class="navbar-links">
        <button id="logOutTab" class="navbar-title">Log Out</button>    
    </div>
    <div id="main-container" class="main-container">
        <div id="leftSidesplit" class="left-sidesplit">
            <div id="tuteeCore" class="tutee-core">
                <p id="tutee-title">Tutor:${this.name} </p>
                <p id="tutee-funded">Is Funded:${this.isFunded} </p>
            </div>
            <div id="tuteeSecondLevel" class="tutee-second-level">
                <div id="tuteeImageContainer" class="tutee-image">
                    <img id="tuteeImage" src=${this.photo} alt="Tutee Image"> 
                </div>
                <div id="tuteePersonal" class="tutee-personal">
                    ${this.info}
                </div>
            </div>
            <div id="tuteeSubject" class="tutee-subject">
                ${this.subjects.toString()}
            </div>
            <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
            </div>
            <div id="tutorTable" class="tutor-table">
                
            </div>
    
        </div>
        <div id="rightSidesplit" class="right-sideSplit">
            Availability
            <div id="availabilityBox" class="Availability-box">
            ${this.availabilty.toString()}
            </div>
    
        </div>
    </div> 
        `
    }
}