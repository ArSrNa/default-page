import type { HtmlHTMLAttributes, PropsWithChildren } from "react"

function Button({ children, ...props }: PropsWithChildren<HtmlHTMLAttributes<HTMLButtonElement>>) {
  return <button className="bg-blue-700 min-w-15 active:bg-blue-600 px-4 py-2 rounded-md cursor-pointer" {...props}>{children}</button>
}

function App() {
  return (
    <div className="flex flex-col gap-4 w-full h-screen py-10">
      <div className="flex flex-col  items-center justify-center gap-4 mt-auto mb-auto">
        <img src="/fischl.png" className="w-30" />
        <h1 className="text-2xl font-bold">前面的区域，以后再来探索吧？</h1>
        <div>访问页面 <code className="bg-gray-700 p-1 rounded-md">{location.href}</code> 不存在</div>
        <div>页面可能正在建设部署中，或已被删除。</div>
        <hr />
        <div><Button onClick={() => window.open('https://www.arsrna.cn')}>回到主站</Button></div>
      </div>
      <footer className="text-gray-500 text-center mt-auto space-x-5">
        <span>Powered by Ar-Sr-Na</span>
        <span>Supercharged by Vite.js</span>
      </footer>
    </div>
  )
}

export default App
