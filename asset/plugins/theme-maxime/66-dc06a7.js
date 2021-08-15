"use strict";(self.webpackChunkTopWritePlugins_theme_maxime=self.webpackChunkTopWritePlugins_theme_maxime||[]).push([[66],{66:(e,i,o)=>{o.r(i),o.d(i,{default:()=>S});var r=o(322),t=o(907),n=o(853),a=o(804),d=o(502);const l=o.p+"media/sun.7ac63355.svg",s=o.p+"media/moon.496540a5.svg";var c=o(201);function x({title:e}){const i=(0,c.Z)(60),{isDarkTheme:o,setLightTheme:n,setDarkTheme:d}=(0,t.useThemeContext)(),x=(0,a.useCallback)((()=>o?n():d()),[o,n,d]);return(0,r.jsxs)(m,Object.assign({fixed:!!e},{children:[(0,r.jsx)(g,{},void 0),(0,r.jsx)(f,Object.assign({mini:i>200},{children:(0,r.jsx)(u,{children:(0,r.jsxs)(v,{children:[(0,r.jsxs)(h,{children:[(0,r.jsx)(w,Object.assign({to:"/"},{children:(0,r.jsx)(t.Logo,{size:45},void 0)}),void 0),e&&(0,r.jsx)(p,{children:(0,r.jsx)("h3",{children:(0,r.jsx)("a",Object.assign({href:"#top",onClick:e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}},{children:e}),void 0)},void 0)},void 0)]},void 0),(0,r.jsx)(b,{children:(0,r.jsx)(y,Object.assign({onClick:x},{children:o?(0,r.jsx)("img",{src:s},void 0):(0,r.jsx)("img",{src:l},void 0)}),void 0)},void 0)]},void 0)},void 0)}),void 0)]}),void 0)}const h=t.styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
`,p=t.styled.div`
  overflow: hidden;
  margin-left: 40px;

  h3 {
    margin-bottom: 0;
    transform: translateY(80px) translateZ(0px);
    transition: 0.5s;

    a {
      color: var(--maximeheckel-colors-typeface-primary);
      display: block;
      text-decoration: none;
      overflow: hidden;
      max-width: 600px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`,m=t.styled.div`
  position: ${e=>e.fixed?"fixed":"inherit"};
  width: 100%;
  z-index: 999;
`,g=t.styled.div`
  height: 6px;
  background-color: var(--maximeheckel-colors-brand);
`,f=t.styled.div`
  background-color: var(--maximeheckel-colors-body);
  box-shadow: none;
  height: 120px;
  transition: 0.5s;

  ${e=>e.mini?t.css`
      height: 70px;
      background-color: var(--maximeheckel-colors-body);
      box-shadow: var(--maximeheckel-shadow-1);
      backdrop-filter: blur(6px);
      opacity: 0.88;

      ${p} {
        h3 {
          transform: none;
        }
      }
    `:""};

  @media (max-width: 700px) {
    box-shadow: var(--maximeheckel-shadow-1);
    height: 65px;
  }
`,u=t.styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: var(--layout-medium);
  grid-template-rows: none;
  grid-auto-flow: row;
  height: inherit;
`,v=t.styled.div`
  grid-column: 2;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,b=t.styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5px;
`,y=t.styled.div`
  border-radius: var(--border-radius-1);
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  color: var(--maximeheckel-colors-typeface-tertiary);

  &:hover {
    background-color: var(--maximeheckel-colors-foreground);
    box-shadow: var(--maximeheckel-shadow-2);
  }
`,w=(0,t.styled)(t.Link)`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
`;function k(){const e=(0,t.useSelector)("file"),i=(0,t.useTitle)(),o=(0,a.useMemo)((()=>t.markdown.parse(e.content)),[e.content]),l=(0,n.Ys)("heading[depth=1]",o),s=(0,n.Ys)("list",o),{summary:c}=(0,t.useBook)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{},void 0),(0,r.jsxs)(j,{children:[(0,r.jsx)("h1",{children:(0,d.B)(l)||i},void 0),s&&(0,r.jsxs)(T,{children:[(0,r.jsx)("h2",{children:"Featured"},void 0),(0,r.jsx)("ul",{children:s.children.map(((i,o)=>{const a=(0,n.Ys)("link",i);if(a){const l=(0,n.td)("link+text",i);return(0,r.jsx)("li",{children:(0,r.jsxs)(t.Anchor,Object.assign({href:a.url,base:e.path},{children:[(0,r.jsx)($,{},void 0),(0,r.jsxs)(B,{children:[(0,r.jsx)("h2",{children:(0,d.B)(a)},void 0),(0,r.jsx)("p",{children:(0,d.B)(l)},void 0)]},void 0)]}),void 0)},`index-${o}`)}return null}))},void 0)]},void 0),(0,r.jsxs)(E,{children:[(0,r.jsx)("h2",{children:"All articles"},void 0),(0,r.jsx)("ul",{children:c.getArticles().map(((e,i)=>(0,r.jsx)("li",{children:(0,r.jsx)(t.Link,Object.assign({to:e},{children:e.title}),void 0)},`article-${i}`)))},void 0)]},void 0)]},void 0)]},void 0)}const j=t.styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 100px;
  grid-template-columns: 1fr minmax(auto, 880px) 1fr;
  grid-template-rows: none;
  grid-auto-flow: row;
  height: inherit;
  padding-top: 128px;

  & > * {
    grid-column: 2;
  }
`,$=t.styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(15px);
  border-radius: 16px;
  transform: scale(1.05) translateZ(0px);
  opacity: 0;
  transition: 0.5s;
`,B=t.styled.div`
  border-radius: var(--border-radius-2);
  margin-bottom: 0px;
  overflow: hidden;
  position: relative;
  background: #f6f7f8;
  box-shadow: var(--maximeheckel-shadow-1);
  padding: 36px 24px;
  transform: none;
  transition: 0.5s;

  h2 {
    color: var(--maximeheckel-colors-typeface-primary);
    margin-bottom: 0px !important;
    letter-spacing: -0.02em;
    margin-block-end: 0px;
  }

  p {
    color: var(--maximeheckel-colors-typeface-secondary);
    margin-top: 1em;
  }
`,T=t.styled.div`
  ul {
    display: grid;
    row-gap: 16px;
    grid-template-columns: none;
    grid-template-rows: none;
    grid-auto-flow: row;
    height: inherit;
    margin-left: 0px;
    margin-bottom: 0px;

    li {
      list-style: none;
      position: relative;
      margin-left: -10px;

      a {
        text-decoration: none;

        &:hover {
          ${$} {
            opacity: 0.8;
          }

          ${B} {
            transform: scale(1.05) translateZ(0px);
          }
        }
      }

      &:nth-child(4n-3) {
        ${B} {
          h2 {
            background: linear-gradient(90deg, #8cb1ff 0%, #abe8ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        ${$} {
          background: linear-gradient(90deg, #8cb1ff 0%, #abe8ff 100%);
        }
      }

      &:nth-child(4n-2) {
        ${B} {
          h2 {
            background: linear-gradient(104.01deg, #9BEBEB 5.51%, #0FA6E9 98.93%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        ${$} {
          background: linear-gradient(104.01deg, #9BEBEB 5.51%, #0FA6E9 98.93%);
        }
      }

      &:nth-child(4n-1) {
        ${B} {
          h2 {
            background: linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        ${$} {
          background: linear-gradient(90deg, #ffa0ae 0%, #aacaef 75%);
        }
      }

      &:nth-child(4n) {
        ${B} {
          h2 {
            background: linear-gradient(90deg, #859EF5 0%, #ffbdd8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        ${$} {
          background: linear-gradient(90deg, #859EF5 0%, #ffbdd8 100%);
        }
      }
    }
  }
`,E=t.styled.div`
  ul {
    display: grid;
    row-gap: 4px;
    grid-template-columns: none;
    grid-template-rows: none;
    grid-auto-flow: row;
    height: inherit;
    margin-left: 0px;
    margin-bottom: 0px;

    li {
      list-style: none;

      a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 10px;
        border-radius: 16px;
        margin-left: -10px;
        height: 60px;
        box-shadow: none;
        color: var(--maximeheckel-colors-typeface-primary);
        transition: background-color 0.25s, box-shadow 0.25s, color 0.25s;
        text-decoration: none;
        font-weight: 500;

        &:hover {
          background-color: var(--maximeheckel-colors-foreground);
          box-shadow: var(--maximeheckel-shadow-1);
          color: var(--maximeheckel-colors-brand);
        }
      }
    }
  }
`,F="markdown--a20d759b";function O({article:e}){const i=(0,t.useSelector)("file"),o=i.getMeta("mtime"),n=(0,t.useIntl)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{title:e.title},void 0),(0,r.jsxs)(L,{children:[(0,r.jsx)("h1",{children:e.title},void 0),(0,r.jsx)(C,{children:(0,r.jsxs)(A,{children:[n.formatDate(o)," ",n.formatTime(o)]},void 0)},void 0)]},void 0),(0,r.jsx)(z,Object.assign({className:F},{children:(0,r.jsx)(t.Markdown,{children:i.content},void 0)}),void 0)]},void 0)}const z=t.styled.div`
  padding: 20px 0px;
  grid-column: 2 / auto;
  display: grid;
  grid-template-columns:1fr minmax(auto, 700px) 1fr;
  column-gap: 20px;
  color: var(--maxime-colors-typeface-secondary);

  article {
    grid-column: 2 / auto;
    color: var(--maxime-colors-typeface-secondary);
  }

  aside {
    position: fixed;
    top: 200px;
    display: flex;
    left: 30px;

    ul {
      li {
        list-style: none;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: 0;

        a {
          color: var(--maximeheckel-colors-typeface-tertiary);
          text-decoration: none;
          line-height: 2;

          :hover {
            text-decoration: none;
            color: var(--maximeheckel-colors-brand);
          }
        }
      }
    }

    @media (max-width: 1024px) {
      display: none;
    }

  }
`,A=t.styled.span`
  font-size: 14px;
  border-radius: 8px;
  height: 28px;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  font-weight: 500;
  cursor: default;
  user-select: none;
  background: var(--maximeheckel-colors-emphasis);
  color: var(--maximeheckel-colors-brand);
  display: inline-flex;
  padding: 5px 8px;
`,C=t.styled.div`
  margin-bottom: 30px;
`,L=t.styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: 1fr minmax(auto, 700px) 1fr;
  grid-template-rows: none;
  grid-auto-flow: row;
  height: inherit;
  padding-top: 248px;
  @media (max-width: 700px) {
    padding-top: 150px;
  }

  & > * {
    align-items: center;
    color: var(--maximeheckel-colors-typeface-primary);
    grid-column: 2 / auto;
  }
`;function D(){return(0,r.jsx)(Y,{children:(0,r.jsx)(Z,{children:(0,r.jsxs)(_,{children:[(0,r.jsx)("hr",{},void 0),(0,r.jsxs)(M,{children:[(0,r.jsx)(t.PoweredBy,{},void 0),(0,r.jsx)(P,{size:35},void 0)]},void 0)]},void 0)},void 0)},void 0)}const Y=t.styled.div`
  background: var(--maximeheckel-colors-body);
  transition: 0.5s;
  height: 130px;
  width: 100%;
`,Z=t.styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: 1fr minmax(auto, 880px) 1fr;
  grid-template-rows: none;
  grid-auto-flow: row;
  height: inherit;
`,_=t.styled.div`
  padding-top: 30px;
  width: 100%;
  grid-column: 2;
  color: var(--maximeheckel-colors-typeface-primary);
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;

  hr {
    height: 1px;
    width: 100%;
    background: rgb(196, 201, 212);
    border: none;
  }
`,M=t.styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`,P=(0,t.styled)(t.Logo)`
  border-radius: 8px;
`;function S(){const e=(0,t.useArticle)();return(0,r.jsxs)(r.Fragment,{children:[e?(0,r.jsx)(O,{article:e},void 0):(0,r.jsx)(k,{},void 0),(0,r.jsx)(D,{},void 0)]},void 0)}}}]);
//# sourceMappingURL=66-dc06a7.js.map