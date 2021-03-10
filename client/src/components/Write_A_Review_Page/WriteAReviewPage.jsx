import React from 'react'
import ReactDOM from 'react-dom'
import MenuBar from '../Main_Search_Page/MenuBar'
import TherapistProfileHeader from '../Detailed_Account_Page/TherapistProfileHeader'
import Adam_Raff from '../images/Dr-Adam-Raff-MD-109495-circle_large 1.svg'
import TherapistSearchSubtitle from '../Main_Search_Page/TherapistSearchSubtitle'

function WriteAReviewPage(props){
    return(
        <div>
            <MenuBar />
            <div className='landing-search-page-body'>
                <h1 className='my-account-page-title'> Write A Review</h1>
                <div className='write-a-review-panel'>
                <TherapistProfileHeader title={props.match.params.therapist} />
                    <div className='write-a-review-rating-and-anonymous-panel'>
                        <div className='write-a-review-rating-section'>
                            <TherapistSearchSubtitle text='Your Rating' />
                            <div className='write-a-review-rating-buttons'>
                                <button className='write-a-review-rating-button'>1</button>
                                <button className='write-a-review-rating-button'>2</button>
                                <button className='write-a-review-rating-button'>3</button>
                                <button className='write-a-review-rating-button'>4</button>
                                <button className='write-a-review-rating-button'>5</button>
                            </div>
                        </div>
                        <div className='write-a-review-rating-section'>
                            <TherapistSearchSubtitle text='Anonymous' />
                            <div className='write-a-review-rating-buttons'>
                                <button className='write-a-review-rating-button'>Y</button>
                                <button className='write-a-review-rating-button'>N</button>
                            </div>
                        </div>
                    </div>
                    <div className='write-a-review-writing-section'>
                        <div className='write-a-review-your-review-container'>
                            <TherapistSearchSubtitle text='Your Review' />
                        </div>
                        <div className='write-a-review-text-area-container'>
                            <textarea className='write-a-review-textarea'></textarea>
                        </div>
                        <div>
                        <button className='write-a-review-rating-button write-a-review-submit-button'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteAReviewPage;