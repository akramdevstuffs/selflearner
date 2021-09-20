import axios from "../utils/axios";
import { useState, useEffect } from "react";

export default function useVideoSearch(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "/api/videos",
      params: { page: pageNumber },
    })
      .then((res) => {
        setVideos((prevVideos) => [...prevVideos, ...res.data]);
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [pageNumber]);

  return { loading, error, videos, hasMore };
}
