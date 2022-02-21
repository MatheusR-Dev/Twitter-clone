import React, { useState } from 'react';    
import { Modal } from '../Modal';
import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon, Dot } from './styles';

const Tweet: React.FC = () => {
  const [ like, setLike] = useState({status: false, count: 5}) 
  const [ retweet, setRetweet] = useState({status:false, count: 10})
  const [ showModal, setShowModal] = useState(false)

    const handleRetweet = () => {
        setRetweet(retweet.status ? {status: false, count: retweet.count - 1} : {status: true, count: retweet.count + 1});
    };

    const handleLike = () => {
        setLike(like.status ? {status: false, count: like.count - 1} : {status: true, count: like.count + 1});
    };

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    console.log(retweet)

    return ( <>
    <Container>
        <Retweeted>
            <RocketseatIcon />
            Você retweetou
        </Retweeted>
        
        <Body>
            <Avatar />
            <Content>
                <Header>
                    <strong>Rocketseat</strong>
                    <span>@rocketseat</span>
                    <Dot />
                    <time>13 de jan</time>
                </Header>

                <Description>Foguete não tem ré 🚀</Description>                   

                <ImageContent />

                <Icons>
                    <Status onClick={openModal}>
                        <CommentIcon />
                        18
                    </Status>
                    <Status active={retweet.status} onClick={handleRetweet}>
                        <RetweetIcon />
                        {retweet.count}
                    </Status>
                    <Status  active={like.status} onClick={handleLike}>
                        <LikeIcon />
                        {like.count}
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
    <Modal showModal={showModal} setShowModal={setShowModal} />
    </>

  );
}

export default Tweet;