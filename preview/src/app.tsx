import { Button, TextField } from "@bsscompk/sway-ui";

const App = () => {
    return (
        <main style="padding: 8px;">
            <TextField label="Name" />
            <br />
            <TextField label="Email" />
            <br />
            <Button>Click me!</Button>
        </main>
    );
};

export default App;
