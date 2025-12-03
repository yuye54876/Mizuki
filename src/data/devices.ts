// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Redmi: [
		{
			name: "Redmi K80 Ultrl",
			image: "/images/device/oneplus13t.png",
			specs: "Gray / 16G + 256GB",
			description: "Flagship performance,  100W SuperVOOC.",
			link: "https://www.mi.com/prod/redmi-k80-ultra",
		},
		{
			name: "Redmi Note 11 T Pro",
			image: "/images/device/oneplus13t.png",
			specs: "XAGA / 8G + 256GB",
			description: "Flagship performance,  67W SuperVOOC.",
			link: "https://www.mi.com/prod/redmi-k80-ultra",
		},
	],
	OnePlus: [
		{
			name: "一加平板 pro",
			image: "/images/device/mt3000.png",
			specs: "Gray / 16G + 512GB",
			description:
				"非常强力的平板.",
			link: "https://www.oppo.com/cn/oneplus/tablets/",
		},
	],
};
