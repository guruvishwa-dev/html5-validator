import { useToggle, upperFirst, useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Anchor,
    Stack,
    Container,
    LoadingOverlay,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { showErrorNotification } from '../utilities/notification';

export interface LoginFormData {
    email: string,
    password: string,
    name: string,
    terms: boolean,

}

export const AuthenticationForm = (props: PaperProps) => {
    const [type, toggle] = useToggle(['login', 'register']);
    const navigate = useNavigate()
    const [visible, { open, close }] = useDisclosure(false);
    const form = useForm<LoginFormData>({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

    const handleSubmit = async (values: LoginFormData) => {
        open(); 
        setTimeout(async () => {
            if (values.email === "guru.vishwa@nextroll.com" && values.password === "Password@123") {
                console.log("success");
                navigate("/validator/html-validator");
                close();
            } else {
                console.log("error");
                showErrorNotification("Error while logging in");
                close();
            }
        }, 3000); 

    };

    return (
        <Container size="xs" >
            {/* <Paper radius="md" p="xl" withBorder {...props}> */}
            <Paper p="xl">

            <img src="../nextroll_logo.svg" alt="Logo" className="Nextroll_logo" />
                <Text size="lg" fw={500}>
                    {/* Welcome to Nextroll SE Team, {type} with */}
                     {type} to Nextroll HTML validator by SE Team 
                </Text>

                <Divider label="Continue with email" labelPosition="center" my="lg" />

                <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                    <Stack >
                        {type === 'register' && (
                            <TextInput
                                label="Name"
                                placeholder="Your name"
                                value={form.values.name}
                                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                radius="md"
                            />
                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                            error={form.errors.email && 'Invalid email'}
                            radius="md"
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                            error={form.errors.password && 'Password should include at least 6 characters'}
                            radius="md"
                        />

                        {/* {type === 'register' && (
                            <Checkbox
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        )} */}
                    </Stack>

                    <Group mt="xl">
                        <Anchor component="button" type="button" color="dimmed" onClick={() => toggle()} size="sm">
                            {type === 'register'
                                ? 'Already have an account? Login'
                                : "Don't have an account? Register"}
                        </Anchor>
                        <Button type="submit" radius="xl">
                            {upperFirst(type)}
                        </Button>
                    </Group>
                    <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />

                </form>
            </Paper>
        </Container>
    );
}
