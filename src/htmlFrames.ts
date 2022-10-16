export const loginPage =`
<div id="navbarLinks" class="navbar-links">
    <button id="signUpTab" class="navbar-title">SignUp</button>
</div>
<form id="user_form" class="input-outline" action="" method="POST">
    <h1>LOGIN</h1>        
    <input id="unField" class="un-field" name="uname" type="text" placeholder="Username"></input>
    <input id="passField" class="pw-field" name="password" type="password" placeholder="Password"></input>
    <input id="logIn" class="login-btn" type="button" name="login" value="Login"> </input>
</form>
`;
export const signupPage =`
<div id="navbar-links" class="navbar-links">   
    <button id="logInTab" class="navbar-title">Login</button>
</div>
<form id="user_form" class="input-outline" action="" method="POST">
    <h1>SIGNUP</h1>      
    <input id="nameField" class="name-field" name="fullName" type="text" placeholder="Full Name">
    <input id="passField" class="pw-field" name="password" type="password" placeholder="Password">
    <input id="subject1" class="un-field" name="subjects" type="text" placeholder="Subject">
    <input id="info" class="un-field" name="info" type="text" placeholder="Info">
    <input id="aval1" name="aval1" type="text" class="un-field" placeholder="Availability">
    <input id="photo" name="photo" type="text" class="un-field" placeholder="Picture URL">
    <input id="tutor" name="tutor" type="checkbox" value="true">Are you a Tutor?
    <input id="signUp" class="signup-submit-btn" type="button" name="signup" value="signUp">
</form>
`;
