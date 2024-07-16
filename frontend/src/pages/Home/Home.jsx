import HomeLayout from '../../layout/HomeLayout/HomeLayout'
import Hero from '../../components/Hero/Hero'
import Feature from '../../components/Feature/Feature'

import chatIcon from '../../assets/icon-chat.png'
import moneyIcon from '../../assets/icon-money.png'
import securityIcon from '../../assets/icon-security.png'

const heroContent = {
    title: 'Open a savings account with Argent Bank today!',
    subtitles: ['No fees.', 'No minimum deposit.', 'High interest rates.'],
    text: 'Open a savings account with Argent Bank today!',
}

const featureContent = [
    {
        icon: chatIcon,
        title: 'You are our #1 priority',
        text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
        icon: moneyIcon,
        title: 'More savings means higher rates',
        text: 'The more you save with us, the higher your interest rate will be!',
    },
    {
        icon: securityIcon,
        title: 'Security you can trust',
        text: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
]

const Home = () => {
    return (
        <HomeLayout
            hero={<Hero {...heroContent} />}
            feature={<Feature content={featureContent} />}
        />
    )
}

export default Home
