

    class Name {

        constructor(fname='', lname=''){
            this.fname = this.capitalize(fname)
            this.lname = this.capitalize(lname)
            this.fullname = this.fname+' '+this.lname
            this.initials = this.fname[0]+'.'+this.lname[0]
        }

        capitalize(str=''){
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        }

    }

    a1 = new Name("john", "SMITH")
    console.log(a1.fname)
    console.log(a1.lname)
    console.log(a1.fullname)
    console.log(a1.initials)

    a2 = new Name("sARah", "fRolliE")
    console.log(a2.fname)
    console.log(a2.lname)
    console.log(a2.fullname)
    console.log(a2.initials)
    