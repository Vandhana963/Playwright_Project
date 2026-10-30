class loginpage
{
    constructor(page)
    {
        this.usernametextfield=page.locator("input#username")
        this.passwordtextfield=page.locator("input#password")
        this.submitbutton=page.getByRole("button",{name:"Submit"})

    }
}

export default loginpage    