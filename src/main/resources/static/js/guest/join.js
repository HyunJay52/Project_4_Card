function validform() {

        var a = document.forms["my-form"]["email-address"].value;
        var b = document.forms["my-form"]["username"].value;
        var c = document.forms["my-form"]["password"].value;
        var d = document.forms["my-form"]["phone_number"].value;

        if (a==null || a=="")
        {
            alert("Please Enter Your Full Name");
            return false;
        }else if (b==null || b=="")
        {
            alert("Please Enter Your Email Address");
            return false;
        }else if (c==null || c=="")
        {
            alert("Please Enter Your Username");
            return false;
        }else if (d==null || d=="")
        {
            alert("Please Enter Your Permanent Address");
            return false;
        }

    }