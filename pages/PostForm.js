// tu vlozime link na usePosts
const { reactive } = Vue

export default {
    template: `
        <section id='post-form-page'>
            <h1>{{ title }}</h1>
            <form id='post-form' @submit.prevent='save()'>
                <input type='text' placeholder='Title Of Post' v-model='form.title'>
                <textarea v-model='form.body' placeholder='Body Of Post'></textarea>
                <button>Save</button>
            </form>
        </section>
    `,
    setup() {
        let title = "Post Form"
        let form = reactive({
            title: null,
            body: null,
        })

        const save = () => {
            // tu pojde kontrola
            // samotne ulozenie cez usePosts
        }
        
        return { title, form, save }
    }
}