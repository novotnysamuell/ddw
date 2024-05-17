// tu vlozime link na usePosts

export default {
    template: `
        <section id='home-page'>
            <h1>{{ title }}</h1>
            <section class='list'>
                <article class='post-card'>
                    <h2>{{ post.title }}</h2>
                    <div>{{ post.body }}</div>
                    <span class='delete-post' @click='removePost()'>Delete</span>
                </article>
            </section>
        </section>
    `,
    setup() {
        let title = "List Of Posts"

        const removePost = (post) => {
            
        }
        return { title, posts, removePost }
    }
}