import { Parser, ElementType } from "htmlparser2"
import { DomHandler, Element, } from "domhandler"
import * as React from 'react'

let html = '<h3>I am very good in PR</h3>\n\n<p>Hello </p>\n\n<p><strong>bold</strong></p>\n\n<p><strong><em>italic</em></strong></p>\n\n<p><strong><em><a href=\"link to contact page\">link to contact page</a></em></strong></p>'

let simple_html = '<h1 class="Hello">Hello World</h1>'

export const raw_html_to_jsx = (raw_html: string): JSX.Element => {
  let handler = new DomHandler()
  let parser = new Parser(handler)

  parser.write(raw_html)

  let res = handler.dom as Element[]
  return html_to_jsx(res)
}

type HtmlAttribute = 'href' | 'class' | 'id' | 'src' | 'alt' // TODO: add more attribute types
const get_attr_value = (element: Element) => (attribute: HtmlAttribute) => element.attributes.find(attr => attr.name == attribute)?.value


const html_to_jsx = (html: Element[], key?: string): JSX.Element => {
  if (key == undefined) {
    key = (Math.random() * 10000).toString()
  }
  return <>
    {
      html.map((element, index) => {
        let any_element = element as any
        if (element.type === 'text') {
          return any_element?.data
        }

        if (element.type === 'tag') {
          switch (element.name) {
            case 'div':
              return <div key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</div>
            case 'h1':
              return <h1 key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</h1>
            case 'h2':
              return <h2 key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</h2>
            case 'h3':
              return <h3 key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</h3>
            case 'h4':
              return <h4 key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</h4>
            case 'h5':
              return <h5 key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</h5>
            case 'h6':
              return <h6 key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</h6>
            case 'p':
              return <p key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</p>
            case 'b':
              return <b key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</b>
            case 'i':
              return <i key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</i>
            case 'strong':
              return <strong key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</strong>
            case 'em':
              return <em key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</em>
            case 'a':
              return <a key={`${key}_${index}`} href={get_attr_value(element)('href')} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children)}</a>
            case 'table':
              return <table key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</table>
            case 'thead':
              return <thead key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</thead>
            case 'tbody':
              return <tbody key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</tbody>
            case 'tr':
              return <tr key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</tr>
            case 'th':
              return <th key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</th>
            case 'td':
              return <td key={`${key}_${index}`} className={get_attr_value(element)('class')}>{html_to_jsx(any_element?.children, `${key}_${index}`)}</td>
            default:
              return <>No implementation for: {element.name}</>

          }
        }

        return <></>

      })
    }
  </>
}


// console.log(raw_html_to_jsx(simple_html))
// console.log(raw_html_to_jsx(html))

// console.log('Done...')