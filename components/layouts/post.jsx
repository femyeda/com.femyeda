import Page from './main'

const Post = ({children}) => {
    return (
        <Page>
            <article>
                {children}
            </article>
        </Page>
    )
}

export default Post