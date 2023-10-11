import React from 'react'

type Props = {}

function BenefitsSection({ }: Props) {
    return (
                    <div id="benefits" className=" text-center">
                        <h3 className="brown_heading py-3">BENEFITS YOU GET <span className="gray">by taking this challenge</span></h3>
                        <div className="benefits_block">
                            <div className="row">
                                <div className="col-lg-4 col-6">
                                    <div className="benefits_block_content">
                                        <img loading="lazy" className="img-fluid" srcSet="/img/benifits/tiny2/221.webp 480w,/img/benifits/tiny2/221.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="resources/img/benifits/tiny2/221.webp" />
                                        <div className="benefits_desc"><div>Active start</div><div><strong>to the day</strong></div></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <div className="benefits_block_content">
                                        <img loading="lazy" className="img-fluid" srcSet="/img/benifits/tiny2/222.webp 480w,/img/benifits/tiny2/222.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="resources/img/benifits/tiny2/222.webp" />
                                        <div className="benefits_desc"><div>Overall body<strong /></div><strong>strength</strong><div><strong /></div></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <div className="benefits_block_content">
                                        <img loading="lazy" className="img-fluid" srcSet="/img/benifits/tiny2/223.webp 480w,/img/benifits/tiny2/223.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="resources/img/benifits/tiny2/223.webp" />
                                        <div className="benefits_desc"><div>Increased range<strong> of motion</strong> </div><div> and mobility</div></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <div className="benefits_block_content">
                                        <img loading="lazy" className="img-fluid" srcSet="/img/benifits/tiny2/224.webp 480w,/img/benifits/tiny2/224.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="resources/img/benifits/tiny2/224.webp" />
                                        <div className="benefits_desc"><div>Better<strong> body</strong></div><div><strong> posture </strong></div></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <div className="benefits_block_content benefits_block_content_middle pt-0">
                                        <img loading="lazy" className="img-fluid" srcSet="/img/benifits/tiny2/225.webp 480w,/img/benifits/tiny2/225.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="resources/img/benifits/tiny2/225.webp" />
                                        <div className="benefits_desc"><div>Better mind and</div><div><strong> body coordination</strong></div></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <div className="benefits_block_content">
                                        <img loading="lazy" className="img-fluid" srcSet="/img/benifits/tiny2/226.webp 480w,/img/benifits/tiny2/226.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="resources/img/benifits/tiny2/226.webp" />
                                        <div className="benefits_desc"><div>Freedom<strong> of</strong></div><div><strong> movement</strong></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default BenefitsSection