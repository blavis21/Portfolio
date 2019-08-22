import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

export default class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>

                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }} />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Blake Davis</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #ffa17f', width: '50%' }} />
                        <p>From the days as a kid disassembling electronics, to the first website I created in high school, I have always had an insatiable curiosity to understand how things work. Prior to starting my programming journey, I worked years of retail followed by construction. Eventually I took over the family business doing carpet cleaning before I realized I longed for a job that would be mentally stimulating daily.</p>
                        <hr style={{ borderTop: '3px solid #ffa17f', width: '50%' }} />
                        <h5>Address</h5>
                        <p>White House, TN 37188</p>
                        <h5>Phone</h5>
                        <p>(615) 478-3592</p>
                        <h5>Email</h5>
                        <p>davis.blake21@gmail.com</p>
                        <hr style={{ borderTop: '3px solid #ffa17f', width: '50%' }} />

                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName="Nashville Software School"
                            schoolDescription="" />
                        <Education
                            startYear={2003}
                            endYear={2007}
                            schoolName="Hendersonville High School"
                            schoolDescription="" />
                        <hr style={{ borderTop: '3px solid #ffa17f' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2019}
                            endYear={2019}
                            jobName="Nashville Software School"
                            jobDescription="Intensive full-time 6-month software development boot camp focusing on full stack (Python/Django) development fundamentals and problem solving. The final half of the program executed in a simulated company environment with Scrum methodology." />
                        <Experience
                            startYear={2017}
                            endYear={2019}
                            jobName="Old Glory Carpet Cleaning"
                            jobDescription="Identified and analyzed customer's concerns about stains and damages, understanding and anticipating needs while building customer relationships based on trust. Maintained and serviced company equipment, e.g., truck mounted engine and water system, upholstery cleaning tools, floor fans, etc... Responsible for acquiring new customers and maintaining relationship. Kept  inventory of cleaning supplies." />
                        <Experience
                            startYear={2015}
                            endYear={2019}
                            jobName="Morgan Electric"
                            jobDescription="Installation and repair of electrical wiring and or electrical components in residential homes. Install Electrical wirings and connect it to the main fuse, breakers, or source of electricity. Repair malfunctions and damages to wiring and conduit. Inspect the wiring and electric status of the home based on codes and certifications. Use hand tools such as screwdrivers, pliers, knives, and hacksaws. Use power tools and testing equipment such as voltmeters, ammeters, and computer systems. Responsible for observing and complying with all company safety regulations and industry standards. Performs other duties as required." />
                        {/* <hr style={{ borderTop: '3px solid #ffa17f' }} /> */}
                        {/* <h2>Skills</h2>
                        
                        <Skills
                            skill="HTML/CSS"
                            // progess={100}
                             />
                        <Skills
                            skill="JavaScript"
                            progess={75} />
                        <Skills
                            skill="React"
                            progess={85} /> */}

                    </Cell>

                </Grid>
            </div>
        )
    }
}
