import axios from '../../utils/axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'

const PlayLists = withRouter(({ history, match , subject_id, setPlayListId}) => {

    console.log(subject_id);

    const [playlists, setPlayLists] = useState([]);

    useEffect(() => {
        axios.get(`/api/courses/${match.params.courseId}/${subject_id}/getPlaylists`)
            .then(resp => setPlayLists(resp.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subject_id])

    return (
        <Container>
            {playlists.map(items => (
                <PlayListCard key={items.id} onClick={e => setPlayListId(items.id)}>
                    <PlayListName children={items.name} />
                </PlayListCard>
            ))}
        </Container>
    )
});

export default PlayLists

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`
const PlayListCard = styled.div`
    background-color: #ccc9c9;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    height: 40px;
    display: flex;
    cursor: pointer;
    align-items: center;
`
const PlayListName = styled.p`

`