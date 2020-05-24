import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

export default function Experience() {

    var iconBgColor = "#fca311"

    return (
        <div id="ExpSection">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - present"
                    iconStyle={{ background: iconBgColor, color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer @ Boingo</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        Data Infrastructure, ingestion and analytics
          </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2018"
                    iconStyle={{ background: iconBgColor, color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Data Science @ UCLA Extension</h3>
                    <h4 className="vertical-timeline-element-subtitle">Westwood, CA</h4>
                    <p>
                        Learned to leverage big data to extract insights and improve decision making. Hands on experience with data collection, management, visualization, and modeling. Courses include:
                    </p>
                    <ul>
                        <li>Exploratory Data Analysis and Visualization</li>
                        <li>Hadoop and Managing Big Data</li>
                        <li>Machine Learning Using R</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2018"
                    iconStyle={{ background: iconBgColor, color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Software Solution Engineer @ ContentWise</h3>
                    <h4 className="vertical-timeline-element-subtitle">El Segundo, CA</h4>
                    <p>
                        Contract work for AT&T to create personalized user experience by supporting data related infastructure
          </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - 2017"
                    iconStyle={{ background: iconBgColor, color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer @ GT-Nexus</h3>
                    <h4 className="vertical-timeline-element-subtitle">Oakland, CA</h4>
                    <div>
                        <p>
                            Worked on employing API services to supplement the supply chain management toolset at GT-Nexus including tracking, geofencing, and notifications.
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2016 - 2016"
                    iconStyle={{ background: iconBgColor, color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer Intern @ Principal Dev</h3>
                    <h4 className="vertical-timeline-element-subtitle">Downtown Los Angeles, CA</h4>
                    <p>
                        Development a fullstack solution prototype that organizes film industry assets and expenses.
          </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2012 - 2016"
                    iconStyle={{ background: iconBgColor, color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Computer Science @ Cal Poly SLO</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}