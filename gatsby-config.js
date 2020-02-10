module.exports = {
  siteMetadata: {
    title: `코드 부스러기 보관소`,
    author: `khyun-kim`,
    description: `초보 개발자의 블로그입니다. 공부한 내용을 기록하고, 정리하기 위해서 작성되었습니다. 혹여 잘못된 정보가 있다면 메일이나 코멘트를 달아주세요.`,
    selfIntroduce: `학교를 졸업한지 얼마 지나지 않은 초보 개발자 입니다. 프로그램 개발을 좋아하고 최근에는 웹 프로그래밍에 관심을 가지고 있습니다.`,
    siteUrl: `https://khyun-kim.github.io/`,
    social: {
      twitter: "",
    },
    aboutMeData: {
      programLangs: [{
          category: `Web Programming`,
          description: `HTML을 활용하여 원하는 구성을 만들 수 있으며 header, footer, section, article 태그의 쓰임을 알고 있습니다. CSS3 각 태그를 원하는 위치에 배치할 수 있고, 원하는 모양으로 만들 수 있습니다. 또한 Express 라이브러리를 이용하여 간단한 웹 서버 및 데이터베이스 서버를 구축할 수 있습니다.`,
          langs: [{
              name: `HTML5`,
              level: 60
            },
            {
              name: `CSS3`,
              level: 40
            },
            {
              name: `Javascript`,
              level: 40
            }
          ]
        },
        {
          category: `DataBase`,
          description: `관계형 데이터베이스에 대해 이해하고 있으며, SQL을 이용하여 원하는 데이터의 값을 조회, 삽입, 삭제할 수 있습니다. NoSQL에 대해 알고 있으며 그 중 문서 지향 데이터베이스인 MongoDB에 대해 이해하고 있습니다.`,
          langs: [{
              name: `MYSQL`,
              level: 40
            },
            {
              name: `MongoDB`,
              level: 30
            }
          ]
        },
      ]
    },
  },
  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: `590px`,

            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [{
                language: "superscript",
                extend: "javascript",
                definition: {
                  superscript_types: /(SuperType)/,
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/,
                  },
                },
              }, ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F2E3EA`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
        disable: false,

        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },
    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
