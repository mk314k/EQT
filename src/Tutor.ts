export class Quantity{
    public constructor(public readonly amount:number, public readonly unit:string){

    }
    public toString():string{
        return this.amount.toString()+" "+this.unit;
    }
}
export class Tutor{
    public readonly money:number =0;
    public readonly points =0;
    public photo ='';
    public readonly info ='';
    public constructor(public readonly name:string, public readonly subjects:Array<string>, public readonly availabilty:Array<string>,photo =''){
        this.photo =photo;
    }

    public generateHTML():string{
        return `
    <div class="navbar-links">
        <button id="logOutTab" class="navbar-title">Log Out</button>    
    </div>
    <div id="main-container" class="main-container">
        <div id="leftSidesplit" class="left-sidesplit">
            <div id="tutorCore" class="tutor-core general-text">
                <p id="tutor-title">Tutor: ${this.name} </p>
                <p id="tutor-money">Money: ${this.money} </p>
                <p id="tutor-points">Points: ${this.points} </p>
            </div>
            <div id="tutorSecondLevel" class="tutor-second-level">
                <div id="tutorImageContainer" class="tutor-image">
                    <img id="tutorImage" src=${"img/"+this.photo} alt="Tutor Image"> 
                </div>
                <div id="tutorPersonal" class="tutor-personal general-text">
                    ${this.info}
                </div>
            </div>
            <div id="tutorSubject" class="tutor-subject general-text">
                ${this.subjects.toString()}
            </div>
            <div class="slidecontainer">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
            </div>
            <div id="tutorTable" class="tutor-table">
                
            </div>
    
        </div>
        <div id="rightSidesplit" class="right-sideSplit general-text">
            <div class="available-head">Availability</div>
            <div id="availabilityBox" class="Availability-box"> ${this.availabilty.toString()}
            </div>
    
        </div>
    </div> 
        `
    }
}