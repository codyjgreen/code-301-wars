function abbrevName(name){
    
        var nam = name.split(' ');
      return nam[0].charAt(0).toUpperCase()+'.' + nam[1].charAt(0).toUpperCase();
    
    //made a variable nam that takes out name and uses .split to split the name at the space between the first and last name
    // then we return the nam[0](or the first name)and the first character and capitalize it and add a period after
    // we then take our second nam[1](or the last name) get the first character in it and capitalize it as well

    }