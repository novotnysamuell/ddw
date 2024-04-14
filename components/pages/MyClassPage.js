//komponent sluziaci ako genericka (vyuziva parameter id) stranka MyClass pre každú triedu
const MyClassPage = {
    template: `
    <div>
        <!--pristupenie k parametru id cez cez globalnu premennú $route-->
        <h1>{{$route.params.id}}</h1>
        <p>There shoud be some basic information about class {{$route.params.id}}.</p>
        <pre>route: {{$route}}</pre>
    </div>
    `
}

export default MyClassPage;