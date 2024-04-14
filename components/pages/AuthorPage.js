//komponent sluziaci ako stranka Author
const AuthorPage = {
    template: `
    <div>
        <h1>Author</h1>
        <p>There shoud be some basic information about author of this web app.</p>
        <table>
            <tr>
                <th>Name</th>
                <td>Samuel</td>
            </tr>
            <tr>
                <th>Surname</th>
                <td>Novotný</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>23</td>
            </tr>
        </table>
        <!--pristupenie k aktualnej route cez globalnu premennú $route-->
        <pre>path: {{$route.fullPath}}</pre>
    </div>
    `
}

export default AuthorPage;