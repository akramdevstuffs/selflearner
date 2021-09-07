import React from 'react'
import {Card, Duration, Img, Title, Date, TextSection, List} from './FeedElements'

const Feeds = () => {
    return (
        <List>
        <Card>
            <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/d4471220-5fee-416d-a69b-70465fec1adb.png" />
            <TextSection>

            <Title>
                 Basic Maths 10 : Characteristics and Mantissa of Logarithm 
            </Title>
            <Duration>01:54:29</Duration>
            <Date>Aug 31, 2021</Date>
            </TextSection>
        </Card>
        </List>
    )
}

export default Feeds
