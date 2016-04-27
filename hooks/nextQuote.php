//<?php

class hook37 extends _HOOK_CLASS_
{
    public function nextQuote()
    {
    	try
    	{
	        $quotes = \IPS\Data\Store::i()->bashorg;

	        if ( !empty($quotes[(\IPS\Request::i()->quote_id + 1)]) ) {
	            $quote_id = \IPS\Request::i()->quote_id + 1;
	        } else {
	            $quote_id = 0;
	        }

	        \IPS\Output::i()->json(array("quote_id" => $quote_id, "quote" => $quotes[$quote_id]));
		}
		catch ( \RuntimeException $e )
		{
			if ( method_exists( get_parent_class(), __FUNCTION__ ) )
			{
				return call_user_func_array( 'parent::' . __FUNCTION__, func_get_args() );
			}
			else
			{
				throw $e;
			}
		}
	}
}
