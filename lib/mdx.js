import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'read-time'
import renderToString from 'next-mdx-remote/render-to-string'

import MDXComponent from '../components/MDXComponents'

const root = process.cwd()

export async function getFiles(type){
    return fa.reddirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type, slug){
    const source = slug ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8') 
        : fa.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

    const {data, context} = matter(source)
    const mdxSource = await renderToString(context, {
        components: MDXComponents
    })

    return{
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug: slug || null,
            ...data
        }
    }
}