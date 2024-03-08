import { useId } from "react";
// useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
// Do not call useId to generate keys in a list. Keys should be generated from your data.

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable,
    currencyDisable,
    className = "",
}) {

    const amountUseId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountUseId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountUseId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    //checking the input field is enable or disable by default it is false
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}  //e.target.value it returns a string to convert it to number we are using Number()
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} //initial value should show as usd
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((Currency) => (
                            <option key={Currency} value={Currency}>
                            {Currency}
                        </option>
                        ))}
                
                </select>

            </div>
        </div>
    );
}

export default InputBox;