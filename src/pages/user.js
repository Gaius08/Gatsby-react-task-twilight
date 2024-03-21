import { Box, Card, CardContent, Typography } from '@mui/material';
import Layout from '../components/layout';
import { getUser } from '../services/list.api';
import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUser();
        setUsers(response); // Assuming response.data contains the array of user objects
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

 

  return (
    <Layout>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "20px",
          }}
        >
          {users.map(user => (
            <Box key={user.id} sx={{ width: "20%", marginBottom: "20px", padding: "10px" }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {user.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {user.body}
                  </Typography>
                  {/* Display more user data here as needed */}
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </div>
    </Layout>
  );
};

export default User;
