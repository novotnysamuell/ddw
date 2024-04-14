const AuthorPage = {
    template: `
    <div>
        <h1>Author</h1>
        <p>There shoud be some basic information about author of this web app.</p>
        <!--pristupenie k aktualnej route cez globalnu premennú $route-->
        <pre>path: {{$route.fullPath}}</pre>
    </div>
    `
}

export default AuthorPage;