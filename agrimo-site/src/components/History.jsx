import React from 'react'
import './History.css'
import WhoWeAreSection from './above-title/WhoWeAreSection'
import LeafIcon from './../assets/images/leaf-icon.png'

const History = () => {
  return (
    <>
      <section className='HistorySection'>
        {/* above title */}
        <div className='history-above-title-container'>
          <WhoWeAreSection icon={LeafIcon} title='Our History' />
        </div>
        {/* header text + paragraph text */}
        <div className='history-section-header-paragraph-text'>
          <div className='history-section-header-text'>
            <p>
              Farming have been since <br />
              1866
            </p>
          </div>
          {/* paragraph text */}
          <div className='history-section-paragraph-text'>
            <p>
              There are many variations of Loreum Ipsum available, but the majority <br />
              have suffered alteration in the form, by injected humour, or randomised words 
              which don't even look even.
            </p>
          </div>
          
        </div>
        {/* History timeline */}
          {/* History timeline */}
<div className='history-timeline-container'>
  <div className='timeline-item'>
    <span className='timeline-year'>1987</span>
    <div className='timeline-dot'></div>
    <h4>Open my Farm</h4>
    <p>Corrupti quos consectetur similique minus iusto odio temporibus.</p>
  </div>

  <div className='timeline-item'>
    <span className='timeline-year'>1995</span>
    <div className='timeline-dot'></div>
    <h4>Farm Remodelacion</h4>
    <p>Majority have suffered alteration in some form by injected humour culpa odio temporibus.</p>
  </div>

  <div className='timeline-item'>
    <span className='timeline-year'>2000</span>
    <div className='timeline-dot'></div>
    <h4>Grainfarmers Formed</h4>
    <p>Always parties but trying the shewing of moment minus Voltron.</p>
  </div>

  <div className='timeline-item'>
    <span className='timeline-year'>1910</span>
    <div className='timeline-dot'></div>
    <h4>Start of Agriculture</h4>
    <p>Consequatur magni Compil ut minus iusto odio temporibus.</p>
  </div>
</div>

      </section>
    </>
  )
}

export default History