import React, { useRef, useState, useEffect} from 'react'
import gsap from 'gsap'

import * as S from './styled'
import links from '../links'

const HamburgerMenu = ({ className }) => {
    
    let sidebar = useRef(null)
    let lineOne = useRef(null)
    let lineTwo = useRef(null)
    let lineThree = useRef(null)
    let menuItems = useRef([])
    menuItems.current = []

    const addToMenuItems = (el) => {
        if (el && !menuItems.current.includes(el)) {
          menuItems.current.push(el)
        }
    }

    let timeline = useRef()
    //let timeline = useState(new TimelineMax({paused: true})) //Outra possibilidade
    const [menuExpanded, setMenuExpanded] = useState(false)

    useEffect(()=>{

        timeline.current = gsap.timeline({paused: true})
        .to(sidebar.current, {
            duration: 1.5,
            clipPath: `circle(200% at 16.3rem 3.7rem)`,
            ease: "power3"
        }, "0")
        .to(lineOne.current, {
            duration: 0.5,
            scaleX: 1.5,
            top: "50%",
            rotation: 45,
            ease: "power3"
        }, "<")
        .to(lineTwo.current, { 
            duration: 0.5,
            autoAlpha: 0,
            ease: "power3"
        }, "<")
        .to(lineThree.current, {
            duration: 0.5,
            scaleX: 1.5,
            bottom: null,
            top: "50%",
            rotation: -45,
            ease: "power3",
        }, "<")
        .from(menuItems.current, {
            duration: 0.1,
            stagger: 0.1,
            y: 30, 
            autoAlpha: 0,
            ease: "power3"
        }, ">")
        .reverse()
        
    },[])

    useEffect(() => {
        //timeline.current.reversed(!menuExpanded) //Outra possibilidade
        menuExpanded === true ? timeline.current.play() : timeline.current.reverse()
    },[menuExpanded])   

    return (
        <S.Wrapper className={className}> {/*Using styled(Component) creates a class which is passed as a prop called className to the wrapped component.*/}
            <S.ToggleBtn onClick={() => setMenuExpanded(!menuExpanded)}>
                <S.Top ref={lineOne}></S.Top>
                <S.Middle ref={lineTwo}></S.Middle>
                <S.Bottom ref={lineThree}></S.Bottom>
            </S.ToggleBtn>
            <S.Description>Menu</S.Description>
            <S.Sidebar ref={sidebar}>
                <S.List>
                        <S.Item>Navegação</S.Item>
                        {links.map((link, index) => (
                            <S.Item key={index} ref={addToMenuItems}>
                                <S.Link to={link.url} onClick={() => setMenuExpanded(!menuExpanded)}>{link.label}</S.Link>
                            </S.Item>
                        ))}

                        <S.Item ref={addToMenuItems}>
                            <S.Link to={'/login'} onClick={() => setMenuExpanded(!menuExpanded)}>Entrar</S.Link>
                        </S.Item>
                </S.List>
            </S.Sidebar>
        </S.Wrapper>
    )
}

export default HamburgerMenu

