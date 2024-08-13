
function show_password()
{
    logotag = document.getElementById('logo-eyes')
    password_tag = document.getElementById('password');

    if (password_tag.type === 'password')
    {
        password_tag.type = 'text'
        logotag.className = "bi bi-eye-slash"
    }
    else
    {
        password_tag.type = 'password'
        logotag.className = "bi bi-eye"
    }
}

function show_password_1()
{
    logotag1 = document.getElementById('logo-eyes-1')
    password_tag_c = document.getElementById('cpassword');

    if (password_tag_c.type === 'password')
    {
        password_tag_c.type = 'text'
        logotag1.className = "bi bi-eye-slash"
    }
    else
    {
        password_tag_c.type = 'password'
        logotag1.className = "bi bi-eye"
    }
}
