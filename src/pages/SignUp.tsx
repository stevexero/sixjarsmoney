import { Auth } from '@supabase/auth-ui-react';
import { supaClient } from '../supabaseClient';

const SignUp = () => {
  return (
    <div className='container flex flex-col items-center mt-12'>
      <div className='modal-box rounded-xl'>
        <h3 className='font-bold text-lg'>Sign up to MoneyG.ro</h3>
        <Auth
          supabaseClient={supaClient}
          providers={['google']}
          view='sign_up'
        />
      </div>
    </div>
  );
};

export default SignUp;
