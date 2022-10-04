import React from 'react';

const Login = () => {
	return (
		<div className='container-fluid mt-5'>
			<div className='row justify-content-center'>
				<div className='w-25'>
					<div className='card'>
						<div className='card-body'>
							<div className='d-flex justify-content-center'>
								<h3>Login</h3>
							</div>
							<form method='post'>
								<div className='form-group'>
									<label htmlFor='username'>Username</label>
									<input type='text' name='username' id='username' placeholder='Username' className='form-control' />
								</div>
								<div className='form-group my-3'>
									<label htmlFor='password'>Password</label>
									<input type='password' name='password' id='password' placeholder='Password' className='form-control' />
								</div>
								<button type='button' className='btn btn-info w-100 rounded-pill mt-2'>
									<span className='text-white'>LOGIN</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
