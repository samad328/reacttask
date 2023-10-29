
import threeImage from '../../assets/images/threeImage1.png'
import Button from '../../assets/buttons/Button'
import '../threeComponent/three.scss';

function Three() {
  return (
    <>
 <div className='three-section'>
    <div className='three-left-text'>
        <h1>This is Three</h1>
        <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia
</p>

<Button />
    </div>
    <div className='three-right-image'>
        <img className='three-image' src={threeImage} alt='' />
    </div>
 </div>

    </>
  )
}

export default Three