
import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provaiders/AuthProvaider';

const Register = () => {
    const { createUser, userUpdate } = useContext(AuthContext);
    const [passerror, setPassError] = useState(null)
    const [accepted, setaccepted] = useState(false);
    const navigate = useNavigate();
    const [success, setSuccess] = useState(null);
    const [erro, setErro] = useState(null);


    const handleFormInfo = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confrim_password = form.confrim_password.value;
        const name = form.name.value;
        const photo = form.photo_url.value;

        if (password !== confrim_password) {
            setPassError(" Password Don't Match");
            return;
        }
        if (password < 8) {
            setPassError("password will be minimum 8 character");
            return
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setPassError("password have must be one uppercase");
            return;
        }
        else if (!/(?=.*\d)/.test(password)) {
            setPassError("password must me have on digit");
            return;
        }
        else if (!/(?=.*[^\da-zA-Z])/.test(password)) {
            setPassError("password must me have on spacial character");
            return;
        }
        createUser(email, password)

            .then(result => {
                const registerUser = result.user
                console.log(registerUser)
                setSuccess(registerUser)
                navigate('/login')
            })
            .catch(err => {
                setErro(err)
            })

    }
    const handleAccepted = event => {
        setaccepted(event.target.checked)
    }
    return (
        <Container className='mt-5 pt-5'>
            <h3 className='text-center'>Register your account</h3>
            <Form
                onSubmit={handleFormInfo}
                className='w-50 mx-auto'>
                <Form.Group className="mb-3" >
                    <Form.Label >Your Name</Form.Label>
                    <Form.Control required name='name' type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label >Photo Url</Form.Label>
                    <Form.Control name='photo_url' type="text" placeholder="Enter your Photo url" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control required name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <p className='text-danger'>{passerror && passerror}</p>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type="password" placeholder="Password" />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='confrim_password' type="password" placeholder="Password" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='check'
                        label={<>Accept <Link to='/terms'>Term & Conditions</Link> </>} />
                </Form.Group>
                <p>
                    {
                        erro && erro.message
                    }
                </p>

                <Button variant="primary" className='w-100' disabled={!accepted} type="submit">
                    Register
                </Button>
                <p className='mt-2'>Already Have An Account ?<Link className='text-danger' to='/login'> Login </Link> </p>
            </Form>
        </Container>
    );
};

export default Register;