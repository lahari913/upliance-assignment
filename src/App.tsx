import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';
import Auth from './components/Auth';
import { Box, Button } from '@mui/material';

function App() {
  const [user, setUser] = useState<any>(null); // Store authentication state

  return (
    <div>
      <h1>React Assignment</h1>
      <Auth user={user} setUser={setUser} /> {/* Pass state to Auth component */}

      {user ? ( // Show content only if the user is logged in
        <>
          <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', mb: 3 }}>
            <Button variant="contained">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Counter</Link>
            </Button>
            <Button variant="contained">
              <Link to="/form" style={{ textDecoration: 'none', color: 'white' }}>User Form</Link>
            </Button>
            <Button variant="contained">
              <Link to="/editor" style={{ textDecoration: 'none', color: 'white' }}>Rich Text Editor</Link>
            </Button>
          </Box>

          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/form" element={<UserForm />} />
            <Route path="/editor" element={<RichTextEditor />} />
          </Routes>
        </>
      ) : (
        <h3 style={{ textAlign: 'center', marginTop: '350px' }}>Please log in to access the content.</h3>
      )}
    </div>
  );
}

export default App;