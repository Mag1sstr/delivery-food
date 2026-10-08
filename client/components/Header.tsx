function Header() {
  return (
    <header className="py-3">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex gap-12">
            <img width={80} src="/logo.svg" alt="" />
            <div>
              <p className="text-[17px] font-semibold mb-2.25">
                Доставка пасты <span className="text-[#F7D22D]">Москва</span>
              </p>
              <div className="flex flex-col lg:gap-5 lg:flex-row">
                <div className="flex items-center gap-1.75">
                  <img width={18} src="/icons/y-icon.png" alt="" />
                  <p className="flex items-center gap-1.75">
                    Яндекс еда{" "}
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#FF2E65" />
                    </svg>
                    <span className="flex items-center gap-1">
                      4.8{" "}
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 4.80469C13 4.57031 12.75 4.47656 12.5625 4.44531L8.64062 3.875L6.88281 0.320312C6.8125 0.171875 6.67969 -2.38419e-07 6.5 -2.38419e-07C6.32031 -2.38419e-07 6.1875 0.171875 6.11719 0.320312L4.35938 3.875L0.4375 4.44531C0.242188 4.47656 0 4.57031 0 4.80469C0 4.94531 0.101563 5.07812 0.195313 5.17969L3.03906 7.94531L2.36719 11.8516C2.35938 11.9063 2.35156 11.9531 2.35156 12.0078C2.35156 12.2109 2.45313 12.3984 2.67969 12.3984C2.78906 12.3984 2.89063 12.3594 2.99219 12.3047L6.5 10.4609L10.0078 12.3047C10.1016 12.3594 10.2109 12.3984 10.3203 12.3984C10.5469 12.3984 10.6406 12.2109 10.6406 12.0078C10.6406 11.9531 10.6406 11.9063 10.6328 11.8516L9.96094 7.94531L12.7969 5.17969C12.8984 5.07812 13 4.94531 13 4.80469Z"
                          fill="#FFC816"
                        />
                      </svg>
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1.75">
                  <p className="flex items-center gap-1.75">
                    Время доставки
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#FF2E65" />
                    </svg>
                    <span>от 31 мин</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-7 flex-col lg:flex-row">
            <a href="tel:77777777777">
              <button className="py-1.75 px-7 bg-[#F3F3F7] text-[#696F7A] font-bold rounded-[28px]">
                Заказать звонок
              </button>
            </a>
            <p className="text-[26px] font-bold text-[#F7D22D]">
              8 499 391-84-49
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
