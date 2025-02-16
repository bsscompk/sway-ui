import { Button, TextField, Checkbox, PinField, PasswordField, A, P } from "@bsscompk/sway-ui";

const App = () => {
    return (
        <main style="padding: 8px;">
            <form method="post">
                <TextField name="name" label="Name" autocomplete="off" />
                <br />
                <TextField
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="john.doe@example.com"
                    autocomplete="email"
                    required
                />
                <br />
                <Checkbox>
                    By submitting you agree to our <a href=".">Terms and Conditions</a>.
                </Checkbox>
                <br />
                <PinField label="Verification Code" length={8} />
                <br />
                <PasswordField label="Current Password" />
                <br />
                <PasswordField label="New Password" disabled />
                <br />
                <PasswordField label="Confirm Password" name="confirm-pass" placeholder="Confirm password" />
                <br />
                <A>Hello, World</A>
                <P>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </P>
                <br />
                <Button type="submit" disabled>
                    Click me!
                </Button>
                <br />
                <Button type="submit">Click me!</Button>
            </form>
        </main>
    );
};

export default App;
