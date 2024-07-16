import PropTypes from 'prop-types'
import Card from '../../components/Card/Card'


const Feature = ({content}) => {
    return <>
    <h2 className="sr-only">Features</h2>
    {content.map((cardContent, index) => (
        <Card key={index} {...cardContent} />
    ))}
    </>
}

Feature.propTypes = {
    content: PropTypes.array,
}


export default Feature
