// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
// import { SafeAreaView, StyleSheet, Text, Image, View, ScrollView, ActivityIndicator, TextInput, Button } from 'react-native';
import { Dots } from "react-activity";
import axios from 'axios';
// import { Card } from 'react-native-elements';
import './MiddleBoxMyEssays.css';
function MiddleBoxMyEssays() {

    const handleSave = () => {

        const fetchRepoData = async () => {
            try {
              const response = await axios.get(
                `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}`
              );
              if (response.status === 200) {
                setRepoName(response.data.base.repo.full_name);
              } else {
                console.error(`Failed to fetch data: ${response.status}`);
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

        const fetchUserData = async (text) => {
          try {
            setError(null);
            const response = await axios.get(`https://api.github.com/users/${text}`);
            setUserData(response.data);
            // console.log(response.data);
          } catch (error) {
            setError(error.message);
          }
        };
    
        const fetchPullRequests = async (text) => {
          try {
              const response = await axios.get('https://api.github.com/search/issues?q=is:pr+author:'+text+'');
              setPullRequests(response.data.items);
              console.log(response.data.items);
              fetchRepoData();
              setLoading(false);
          } catch (error) {
              console.error('Error fetching pull requests:', error);
              setLoading(false);
          }
      };
        // Implement your save logic here
        console.log('Text input value:', text);
        // You can use this value to save to a database, update state, etc.
        fetchUserData(text);
        fetchPullRequests(text);
      };
    
    
    
    
      const [pullRequests, setPullRequests] = useState([]);
      const [loading, setLoading] = useState(true);
      const [text, setText] = useState('');
      const [userData, setUserData] = useState(null);
      const [error, setError] = useState(null);

      return (
        <div>
    
    
    {error ? (
            <p>Error: {error}</p>
          ) : userData ? (
            <div>
              <img
                src={userData.avatar_url }
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <p>{userData.name}</p>
              <p>{userData.bio}</p>
              {/* Render other user details as needed */}
            </div>
          ) : (
            <p>Loading...</p>
          )}
          
    
    
    
    
            {/* <Card containerStyle={styles.card}> */}
              <input
                
                
                onChange={(event)=>{setText(event.target.value)}}
                value={text}
                
              />
              <button
                title="Save"
                onClick={() => handleSave()}
              />
            {/* </Card> */}
    
    
            <p style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>GitHub Merged Pull Requests:</p>
            {loading ? (
                <Dots color='white' />
            ) : (
                <div>
                    {pullRequests.map((pr,index) => (
                        <div key={pr.id} style={{ fontSize: 14,marginBottom: 90,border: '1px solid green'  }}>
                            <p>PR :</p>
                            <p>{index+1}. {pr.title}</p>
                            <p>Link :</p>
                            <a href={pr.pull_request.html_url}><p>{pr.pull_request.html_url}</p></a>
                            <p>Time :</p>
                            <p>{pr.pull_request.merged_at}</p>
                            {/* Render other PR details as needed */}
                        </div>
                    ))}
                </div>
            )}
        </div>
      );
    
}
export default MiddleBoxMyEssays;