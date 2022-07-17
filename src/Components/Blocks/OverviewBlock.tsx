import styled from 'styled-components'

const OverviewBlock = () => {
    return (
        <Overview>
            <img src='logo.png' alt='logo' />
            <h2>Оставьте заявку и станьте частью нашей команды</h2>
            <p>Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров,
                архитекторов и декораторов, дизайн-бюро и интерьерные студии — все,
                кто дизайн интерьера сделали своим призванием.</p>
            <p>Партнерство мы видим как доверительные отношения, основанные на
                честности реализации бизнес идей в сфере создания и продаж современной,
                качественной, удобной, функциональной и эксклюзивной мебели.</p>
            <p>Ознакомиться с проектами можете в нашем <a href={"/"}>портфолио</a>.
                Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам:
                составим уникальные условия сотрудничества,
                предоставим 3D модели (уточняйте у менеджеров)
                и разработаем коммерческое предложение к Вашему проекту
                или изображениям.</p>
        </Overview>
    )
}

export default OverviewBlock

const Overview = styled("div")`
width: 940px;
height: 478px;
display:flex;
flex-direction:column;
justify-content:center;
img{
    width: 474.46px;
height: 70px;
}
h2{
font-family: SF UI Display, sans-serif;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 150%;
margin:40px 0;
}
p{
    font-family: Open Sans;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
a{
   color: #0086A8;
}
}
`