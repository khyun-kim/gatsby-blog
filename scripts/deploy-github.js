const ghpages =require('gh-pages')

ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/khyun-kim/khyun-kim.github.io.git'
    },
    ()=> {
        console.log('Deploy Complete!')
    }
)