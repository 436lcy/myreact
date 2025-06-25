import React, {useRef,useState} from 'react'
import image1 from '../../assets/2.webp'
export default function LazyCat() {
    // function back(){
    //     const container = document.querySelector('.scroll-container')
    //     const initWidth = 300
    //     let currentPosition =0
    //     currentPosition =Math.min(currentPosition+initWidth,0)
    //     container.style.transform =`translateX(${currentPosition}px)`
    // }
   
    //    function next(){
    //     const container = document.querySelector('.scroll-container')
    //     const initWidth = 300
    //     let currentPosition =0
    //     const maxPosition = -initWidth
    //     currentPosition =Math.max(currentPosition-initWidth,maxPosition)
    //     container.style.transform =`translateX(${currentPosition}px)`
    // }
    const [currentPosition,setCurrentPosition] =useState(0)
    const container = useRef()
    const initWidth = 300
    const maxPosition = -initWidth*2.7
    function back(){
        setCurrentPosition((currentPosition)=>{
            const newPosition=Math.min(currentPosition+initWidth,0)
            return newPosition
        })
    }
     function next(){
        setCurrentPosition((currentPosition)=>{
            const newPosition=Math.max(currentPosition-initWidth,maxPosition)
            return newPosition
        })
    }
    React.useEffect(()=>{
       container.current.style.transform = `translateX(${currentPosition}px)`;
    },[currentPosition])

    const container2 = useRef()
    const [currentPosition2,setCurrentPosition2] = useState(0)
    const initWidth2=700
    const maxPosition2 = -initWidth2*2
    function back2(){
        setCurrentPosition2((preState)=>{
            const newState = Math.min(currentPosition2+initWidth2,0)
            return newState
        })
    }
    function next2(){
        setCurrentPosition2((preState)=>{
            const newState = Math.max(currentPosition2-initWidth2,maxPosition2)
            return newState
        })
    }
    React.useEffect(()=>{
        container2.current.style.transform =`translateX(${currentPosition2}px)`
    },[currentPosition2])
  return (
    <div>
            <div className="intro">
            <div className="intro-container">
                <div className="intro-container-text">
            <h1>高端私有云</h1>
            <h1>选懒猫就对了</h1>
            <p>超稳定内网穿透,家中设备丝滑访问</p>
            <p>硬件双重验证,杜绝黑客攻击</p>
            <p>一线工程师,专业陪玩</p>
            <p>¥ 5399起</p>
            <a href=""><button className="header-container-navs-button">京东购买</button></a>
        </div>
        <img className="intro-img" src={image1} alt=""/>
        </div>
            </div>
            <div className="product-title">
        <h1>小桌塔</h1>
        <h1>摆在哪里都好看</h1>
        <p className="margin-top">比Mini更Mini,千金难买你欢喜</p>
     <div className="product-navigation">
         <button id="back" onClick={back}>《</button>
        <button id="next" onClick={next}>》</button>
     </div>
            </div>
            <div className="scroll">
    {/* <div className="scroll-container" >  */}
         <div className="scroll-container"  ref={container}  > 
        <div className="scroll-items">
            <img style={{width:'300px',height:'363px'}} src={image1} alt="" />
            <h3>匠心工艺</h3>
            <p className="margin-top">航空级铝材,手感细腻温润</p>
        </div>
        <div className="scroll-items">
            <img style={{width:'300px',height:'363px'}} src={image1}alt="" />
            <h3>匠心工艺</h3>
            <p className="margin-top">航空级铝材,手感细腻温润</p>
        </div>
        <div className="scroll-items">
            <img style={{width:'300px',height:'363px'}}src={image1} alt=""/>
            <h3>匠心工艺</h3>
            <p className="margin-top">航空级铝材,手感细腻温润</p>
        </div>
        <div className="scroll-items">
            <img style={{width:'300px',height:'363px'}} src={image1}alt=""/>
            <h3>匠心工艺</h3>
            <p className="margin-top">航空级铝材,手感细腻温润</p>
        </div>
        <div className="scroll-items">
            <img style={{width:'300px',height:'363px'}}src={image1} alt=""/>
            <h3>匠心工艺</h3>
            <p className="margin-top">航空级铝材,手感细腻温润</p>
        </div>
        <div className="scroll-items">
            <img style={{width:'300px',height:'363px'}}src={image1}alt=""/>
            <h3>匠心工艺</h3>
            <p className="margin-top">航空级铝材,手感细腻温润</p>
        </div>
          <div className="scroll-items">
            <img style={{width:'300px',height:'363px'}} src={image1} alt=""/>
            <h3>匠心工艺</h3>
            <p className="margin-top">航空级铝材,手感细腻温润</p>
        </div>  
          <div className="scroll-items">
            <img style={{width:'300px',height:'363px'}} src={image1} alt=""/>
            <h3>匠心工艺</h3>
            <p className="margin-top">航空级铝材,手感细腻温润</p>
        </div>    
    </div>
            </div>
            <div className="section">
            <img style={{width:'100%',height:'363px'}} src={image1} alt=""/>
           
            </div>
            <div className="buy-reason">
        <div className="buy-reason-container">
            <div className="buy-title">
                <h1>懒猫微服 <a style={{color:'skyblue'}}>购买</a> 理由</h1>
            </div>
             <div className="buy-container" >
    <div className="buy-container-left">
        <div className="buy-container-left-up">
            <div className="buy-container-left-up-left">
                <h3>芯片算力超强劲</h3>
                <p>wwwwwwwwwwwwwwwwww</p>
            </div>
            <div className="buy-container-left-up-right">
                <div className="buy-container-left-up-right-up">
                    <h1>机智安全<strong>放心存</strong></h1>
                    <p style={{fontSize:'11px',color:'#6C6C6C'}}>wwwwwwwwwwwwwwwwwwwwww</p>
                </div>
                <div className="buy-container-left-up-right-down">
                    <h1>机智安全<strong>放心存</strong></h1>
                    <p style={{fontSize:'11px',color:'#6C6C6C'}}>wwwwwwwwwwwwwwwwwwwwww</p>
                </div>
            </div>
        </div>
        <div className="buy-container-left-down">
            <div className="item">
                <h3>全自动</h3>
                <h3>数据备份</h3>
                <p>wwwwwwwwww</p>
            </div>
            <div className="item">
                <h3>全自动</h3>
                <h3>数据备份</h3>
                <p>wwwwwwwwww</p>
            </div>
            <div className="item">
                <h3>全自动</h3>
                <h3>数据备份</h3>
                <p>wwwwwwwwww</p>
            </div>
        </div>
    </div>
    <div className="buy-container-right">
        <div className="buy-container-right-left">
            <div className="liesan">
                <h3>超安全内网穿透</h3>
                <p>wwwww</p>
            </div>
            <div className="liesan">
                <h3>超安全内网穿透</h3>
                <p>wwwww</p>
            </div>
            <div className="liesan">
                <h3>超安全内网穿透</h3>
                <p>wwwww</p>
            </div>
        </div>
        <div className="buy-container-right-right">
            <div className="lieer">
                <h3>AI+</h3>
                <p>wwwwwww</p>
            </div>
            <div className="lieerbig">
                <h3>赛博朋克</h3>
                <p>wwwwwww</p>
            </div>
        </div>
    </div>
            </div>
        </div>
            </div>
             <div className="about">
        <div className="about-title">
            <h1 style={{fontSize:'60px'}}>了解一下,懒猫微服</h1>
            <h4 style={{marginTop:'24px'}}>软件功能超强大,售后服务很贴心</h4>
        </div>
        <div className="about-container">
            <div className="about-container-items" ref={container2}>
                <div >
                    <img style={{width: '700px',height: '548px'}} src={image1} alt=""/>
                </div>
                 <div>
                    <img style={{width: '700px',height: '548px'}} src={image1} alt=""/>
                </div>
                 <div>
                    <img style={{width: '700px',height: '548px'}} src={image1} alt=""/>
                </div>
            </div>
                 <button id="back2" onClick={back2}>《</button>
               
                <button id="next2" onClick={next2}>》</button>
        </div>
            </div>
            <div className="people">
            <div className="people-title">
            <h1 style={{fontSize:'60px'}}>找到属于你的那一面</h1>
            <p style={{fontSize:'14px',color:'#6C6C6C',marginTop:'20px'}}>你是宝妈宝爸,计算机黑客还是商务精英</p>
            <h3 style={{marginTop:'30px'}}>探索懒猫微服,解释智能新体验</h3>
        </div>
        <div className="people-container">
            <div className="people-container-item1">
                <img style={{width:'240px',height:'400px'}}src={image1} alt=""/>
                <button className="people-btn">宝妈宝爸</button>
            </div>
             <div className="people-container-item2">
                <img style={{width:'240px',height:'400px'}}src={image1} alt=""/>
                 <button className="people-btn">宝妈宝爸</button>
            </div>
             <div className="people-container-item3">
                <img style={{width:'240px',height:'400px'}} src={image1}alt=""/>
                 <button className="people-btn">宝妈宝爸</button>
            </div>
        </div>
             </div>
             <div className="appstore">
        <div className="appstore-title">
            <h1 style={{fontSize:'60px'}}>最大的</h1>
            <h1 style={{fontSize:'60px'}}>私有云应用商店</h1>
            <p style={{fontSize:'12px',color:'#6C6C6C',marginTop:'15px'}}>1400+应用一键安装,所以应用外网均可自由访问</p>
        </div>
        <div className="appstore-container">
            <img className="appstore-img" style={{width:'500px',height:'380px'}} src={image1} alt=""/>
        </div>
       <button className="appstore-btn">探索商店</button>
            </div>
            <div className="cloud">
        <div className="cloud-title">
            <h1 style={{fontSize:'60px'}}>你的数据&nbsp;&nbsp;你的云</h1>
        </div>
        <div className="cloud-container">
            <div className="cloud-left">
                <h3 style={{fontSize:'30px',marginLeft:'15px'}}>公有云</h3>
                <div className="cloud-left-item">
                    <div className="item-content">
                        <img style={{width:'24px',height:'24px'}} src={image1} alt=""/>
                        <h4 style={{display:'inline',marginLeft:'5px',fontSize:'24px'}}>数据在远方</h4>
                        <p style={{color:'#6C6C6C',fontSize:'11px'}}>数据寄存在互联网厂商哪里,安全性要靠对方的靠谱程度</p>
                    </div>
                </div>
                <div className="cloud-left-item">
                    <div className="item-content">
                        <img style={{width:'24px',height:'24px'}} src={image1}alt=""/>
                        <h4 style={{display:'inline',marginLeft:'5px',fontSize:'24px'}}>数据在远方</h4>
                        <p style={{color:'#6C6C6C',fontSize:'11px'}}>数据寄存在互联网厂商哪里,安全性要靠对方的靠谱程度</p>
                    </div>
                </div>
                <div className="cloud-left-item">
                    <div className="item-content">
                        <img style={{width:'24px',height:'24px'}} src={image1} alt=""/>
                        <h4 style={{display:'inline',marginLeft:'5px',fontSize:'24px'}}>数据在远方</h4>
                        <p style={{color:'#6C6C6C',fontSize:'11px'}}>数据寄存在互联网厂商哪里,安全性要靠对方的靠谱程度</p>
                    </div>
                </div>
                <div className="cloud-left-item">
                    <div className="item-content">
                        <img style={{width:'24px',height:'24px'}} src={image1}alt=""/>
                        <h4 style={{display:'inline',marginLeft:'5px',fontSize:'24px'}}>数据在远方</h4>
                        <p style={{color:'#6C6C6C',fontSize:'11px'}}>数据寄存在互联网厂商哪里,安全性要靠对方的靠谱程度</p>
                    </div>
                </div>
            </div>
            <div className="cloud-right">
                 <h3 style={{fontSize:'30px',marginLeft:'15px'}}>懒猫微服<strong>私有云</strong></h3>
                 <div className="cloud-left-item">
                    <div className="item-content">
                        <img style={{width:'24px',height:'24px'}} src={image1}alt=""/>
                        <h4 style={{display:'inline',marginLeft:'5px',fontSize:'24px'}}>数据在远方</h4>
                        <p style={{color:'#6C6C6C',fontSize:'11px'}}>数据寄存在互联网厂商哪里,安全性要靠对方的靠谱程度</p>
                    </div>
                </div>
                 <div className="cloud-left-item">
                    <div className="item-content">
                        <img style={{width:'24px',height:'24px'}} src={image1} alt=""/>
                        <h4 style={{display:'inline',marginLeft:'5px',fontSize:'24px'}}>数据在远方</h4>
                        <p style={{color:'#6C6C6C',fontSize:'11px'}}>数据寄存在互联网厂商哪里,安全性要靠对方的靠谱程度</p>
                    </div>
                </div>
                 <div className="cloud-left-item">
                    <div className="item-content">
                        <img style={{width:'24px',height:'24px'}} src={image1} alt=""/>
                        <h4 style={{display:'inline',marginLeft:'5px',fontSize:'24px'}}>数据在远方</h4>
                        <p style={{color:'#6C6C6C',fontSize:'11px'}}>数据寄存在互联网厂商哪里,安全性要靠对方的靠谱程度</p>
                    </div>
                </div>
                 <div className="cloud-left-item">
                    <div className="item-content">
                        <img style={{width:'24px',height:'24px'}} src={image1} alt=""/>
                        <h4 style={{display:'inline',marginLeft:'5px',fontSize:'24px'}}>数据在远方</h4>
                        <p style={{color:'#6C6C6C',fontSize:'11px'}}>数据寄存在互联网厂商哪里,安全性要靠对方的靠谱程度</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        <div className="nas">
        <div className="nas-title">
            <p style={{fontSize:'16px',color:'#44444s'}}>懒猫微服=传统NAS + Cloudflare + Taillscale +Vpn</p>
        </div>
        <div className="nas-container">
            <div className="nas-left">
                <h3 className="nas-left-title">传统NAS</h3>
                <div style={{marginTop:'60px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                  <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
            </div>
            <div className="nas-right">
                <h3 className="nas-right-title">懒猫微服</h3>
                <div style={{marginTop:'60px'}}className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                  <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}}className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}} className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
                   <div style={{marginTop:'20px'}}className="nas-left-item">
                    <p>只有官方应用可以穿透,三方应用许自己折腾反省代理,外网暴露不安全暴露IP不安全</p>
                </div>
            </div>
        </div>
    </div>
    <div className="reviews">
        <div className="reviews-title">
            <h2 style={{color:'white'}}>听创造者说</h2>
            <h2 style={{color:'white'}}>真实故事 真实感受</h2>
            <p style={{fontSize:'11px',color:'white',marginTop:'15px'}}>倾听创作者的声音,喜欢遇到你</p>
        </div>
        <div className="reviews-container">
            <div className="reviews-items">
               <div className="reviews-header">
                <img style={{width:'41px',height:'41px',verticalAlign:'middle'}} src={image1}alt=""/>
                <div style={{display:'inline-block',verticalAlign:'middle',marginLeft:'10px'}}>
                <p >gLzjin</p>
                <p >信息安全爱好者</p>
                </div>
              </div>
              <div>
                <p style={{fontSize:'11px',marginLeft:'15px',marginTop:'15px'}}>我呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜</p>
              </div>
            </div>
            <div className="reviews-items">
               <div className="reviews-header">
                <img style={{width:'41px',height:'41px',verticalAlign:'middle'}} src={image1} alt=""/>
                <div style={{display:'inline-block',verticalAlign:'middle',marginLeft:'10px'}}>
                <p >gLzjin</p>
                <p >信息安全爱好者</p>
                </div>
              </div>
              <div>
                <p style={{fontSize:'11px',marginLeft:'15px',marginTop:'15px'}}>我呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜</p>
              </div>
            </div>
            <div className="reviews-items">
               <div className="reviews-header">
                <img style={{width:'41px',height:'41px',verticalAlign:'middle'}} src={image1} alt=""/>
                <div style={{display:'inline-block',verticalAlign:'middle',marginLeft:'10px'}}>
                <p >gLzjin</p>
                <p >信息安全爱好者</p>
                </div>
              </div>
              <div>
                <p style={{fontSize:'11px',marginLeft:'15px',marginTop:'15px'}}>我呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜</p>
              </div>
            </div>
            <div className="reviews-items">
               <div className="reviews-header">
                <img style={{width:'41px',height:'41px',verticalAlign:'middle'}} src={image1} alt=""/>
                <div style={{display:'inline-block',verticalAlign:'middle',marginLeft:'10px'}}>
                <p >gLzjin</p>
                <p >信息安全爱好者</p>
                </div>
              </div>
              <div>
                <p style={{ontSize:'11px',marginLeft:'15px',marginTop:'15px'}}>我呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜</p>
              </div>
            </div>
            <div className="reviews-items">
               <div className="reviews-header">
                <img style={{width:'41px',height:'41px',verticalAlign:'middle'}} src={image1}alt=""/>
                <div style={{display:'inline-block',verticalAlign:'middle',marginLeft:'10px'}}>
                <p >gLzjin</p>
                <p >信息安全爱好者</p>
                </div>
              </div>
              <div>
                <p style={{ontSize:'11px',marginLeft:'15px',marginTop:'15px'}}>我呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜</p>
              </div>
            </div>
        </div>
    </div>
     <div className="hardware">
        <div className="hardware-title">
            <h1 className="hardware-h1" style={{display:'inline-block'}}>懒猫微服 硬件细节</h1>
            <button className="hardware-btn">立即购买</button>
        </div>
        <div className="hardware-container">
            <div className="hardware-container-header">
                <div className="hardware-container-header-left">
                    <img style={{width:'140px',height:'140px'}} src={image1} alt=""/>
                     <div style={{textAlign:'center'}}>
                        <h3>太空白</h3>
                        <p>喷砂烤漆工艺</p>
                    </div>
                </div>
                <div className="hardware-container-header-right">
                   <img style={{width:'140px',height:'140px'}} src={image1} alt=""/>
                     <div style={{textAlign:'center'}}>
                        <h3>太空白</h3>
                        <p>喷砂烤漆工艺</p>
                    </div>
                </div>
                <div className="hardware-container-header-content">
                    <h1>基本信息</h1>
                    <div>
                        <h5 style={{display:'inline-block'}}>型号</h5>
                        <p style={{display:'inline-block',marginLeft:'30px'}}>LC02</p>
                    </div>
                     <div>
                           <h5 style={{display:'inline-block'}}>型号</h5>
                        <p style={{display:'inline-block',marginLeft:'30px'}}>LC02</p>
                    </div>
                     <div>
                           <h5 style={{display:'inline-block'}}>型号</h5>
                        <p style={{display:'inline-block',marginLeft:'30px'}}>LC02</p>
                    </div>
                     <div>
                           <h5 style={{display:'inline-block'}}>型号</h5>
                        <p style={{display:'inline-block',marginLeft:'30px'}}>LC02</p>
                    </div>
                </div>
                <div className="hardware-container-header-content">
                    <h1>基本信息</h1>
                    <div>
                          <h5 style={{display:'inline-block'}}>型号</h5>
                        <p style={{display:'inline-block',marginLeft:'30px'}}>LC02</p>
                    </div>
                     <div>
                         <h5 style={{display:'inline-block'}}>型号</h5>
                        <p style={{display:'inline-block',marginLeft:'30px'}}>LC02</p>
                    </div>
                     <div>
                           <h5 style={{display:'inline-block'}}>型号</h5>
                        <p style={{display:'inline-block',marginLeft:'30px'}}>LC02</p>
                    </div>
                     <div>
                           <h5 style={{display:'inline-block'}}>型号</h5>
                        <p style={{display:'inline-block',marginLeft:'30px'}}>LC02</p>
                    </div>
                </div>
            </div>
        </div>
   </div>
    <div className="footer">
        <div className="footer-container">
            <div className="footer-container-item">
                <h2>产品</h2>
                <ul>
                    <li style={{marginTop:'15px'}}>Lc-02</li>
                </ul>
            </div>
            <div className="footer-container-item">
                <h2>产品</h2>
                <ul>
                    <li style={{marginTop:'15px'}}>Lc-02</li>
                </ul>
            </div>
            <div className="footer-container-item">
                <h2>产品</h2>
                <ul>
                    <li style={{marginTop:'15px'}}>Lc-02</li>
                </ul>
            </div>
        </div>
        <div style={{textAlign:'center'}}>
            <p style={{fontSize:'11px',color:'#6C6C6C'}}>有限公司</p>
        </div>
    </div>

    </div>
  )
}

