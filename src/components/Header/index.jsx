import React from 'react'
import { useRoutes,Link } from 'react-router-dom'
import routes from '../../routes/routes'
export default function () {
    const element = useRoutes(routes)
  return (
    <div>
          <div className="header">
        <div className="header-container">
            <div className="header-container-navs">
                {/* <a className="header-container-navs-items" href="#">懒猫微服</a> */}
                <Link className="header-container-navs-items" to='/' >懒猫微服</Link>
                {/* <a className="header-container-navs-items" href="#">应用商店</a> */}
                <Link className="header-container-navs-items" to='/store' >应用商店</Link>
                {/* <a className="header-container-navs-items" href="#">攻略</a> */}
                 <Link className="header-container-navs-items" to='/raiders' >攻略</Link>
                {/* <a className="header-container-navs-items" href="#">下载</a> */}
                    <Link className="header-container-navs-items" to='/down' >下载</Link>
                {/* <a className="header-container-navs-items" href="#">开发者</a> */}
                   <Link className="header-container-navs-items" to='/provider' >开发者</Link>
                {/* <a className="header-container-navs-items" href="#">关于</a> */}
                  <Link className="header-container-navs-items" to='/about' >关于</Link>
                <input className="header-container-input" type="text" placeholder="搜索" />
                <a href="#"><button className="header-container-navs-button">购买</button></a>
                <a className="header-container-navs-items" href="#">登录</a>
            </div>
        </div>
        </div>
        <div>
            {element}
        </div>
    </div>
  )
}
