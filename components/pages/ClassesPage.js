const {reactive} = Vue;

//komponent sluziaci ako stranka Classes
// na tejto stranke budu vypisane vsetky triedy, ktore maju DDW so mnou
// po kliknuti na nejaku konkretnu triedu nas presmeruje na stranku danej triedy kde budu informacie o nej
// v setup som teda definoval pole nazvou tried ktore ucim
const ClassesPage = {
    template: `
    <div>
        <h1>Classes</h1>
        <!--pre kazdu triedu ktoru ucim definujem link pomocou router-link elementu ktory-->
        <!--nas presmeruje na genericku stranku danej triedy ako parameter stranky id odovzdam nazov triedy-->
        <router-link v-for="(c,idx) of classes" :key="idx" :to="'/classes/'+c">{{c}}</router-link>
        <!--z vyssie uvedeneho cyklu mi teda vzniknu dva linky s route-ami:-->
        <!--/classes/III.C"-->
        <!--/classes/III.D"-->
        <pre>route path: {{$route.fullPath}}</pre>
    </div>
    `,
    setup(){
        const classes = reactive(["III.C ","III.D"])
        return{
            classes
        }
    }
}

export default ClassesPage;
