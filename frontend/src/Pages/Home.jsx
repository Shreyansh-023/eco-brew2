import BaseLayout from "../Layouts/BaseLayout";
import { Coffee, Trees as Tree } from "lucide-react";
import { useEffect, useState } from "react";
export default function Home() {
	const [cupsCount, setCupsCount] = useState(0);
	const [treesCount, setTreesCount] = useState(0);

	useEffect(() => {
		// Animate counts up to final values
		const cupsDuration = 2000; // 2 seconds
		const cupsInterval = 20; // Update every 20ms
		const cupsTarget = 16000000; // 16 million cups per day
		const cupsStep = (cupsTarget / cupsDuration) * cupsInterval;

		const treesTarget = 20000000; // 20 million trees per year
		const treesPerDay = Math.round(treesTarget / 365);
		const treesStep = (treesPerDay / cupsDuration) * cupsInterval;

		const timer = setInterval(() => {
			setCupsCount((current) => {
				const next = current + cupsStep;
				return next >= cupsTarget ? cupsTarget : next;
			});
			setTreesCount((current) => {
				const next = current + treesStep;
				return next >= treesPerDay ? treesPerDay : next;
			});
		}, cupsInterval);

		return () => clearInterval(timer);
	}, []);

	return (
		<BaseLayout>
			<section className='flex flex-row'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48'>
					<h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
						BE THE
						<span className='bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent'>
							{" "}
							CHANGE!
						</span>
					</h1>
					<h1 className='text-3xl/10 text-white/90 max-w-2xl mb-8 py-4'>
						Building a sustainable future through innovative solutions and
						responsible development. Join us in creating a better world for
						generations to come.
					</h1>
				</div>
			</section>
			<section className='py-24 backdrop-blur-sm'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-4xl font-bold text-center text-white mb-16'>
						The Environmental Impact
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
						{/* Paper Cups Visualization */}
						<div className='bg-white rounded-2xl shadow-xl p-8 '>
							<div className='flex items-center justify-between mb-6'>
								<div>
									<h3 className='text-2xl font-bold text-gray-900'>
										Daily Paper Cup Waste
									</h3>
									<p className='text-gray-600'>
										Disposable cups used per day globally
									</p>
								</div>
								<Coffee className='w-12 h-12 text-emerald-600' />
							</div>

							<div className='relative h-48 mb-4'>
								{/* SVG Graph */}
								<svg className='w-full h-full' viewBox='0 0 400 200'>
									{/* Animated wave pattern */}
									<path
										d={`M 0 200 
                       C 100 ${180 - (cupsCount / 16000000) * 100} 
                         200 ${160 - (cupsCount / 16000000) * 100} 
                         400 ${140 - (cupsCount / 16000000) * 100} 
                       V 200 H 0 Z`}
										fill='url(#cupsGradient)'
										className='transition-all duration-300 ease-in-out'
									/>
									<defs>
										<linearGradient
											id='cupsGradient'
											x1='0'
											y1='0'
											x2='0'
											y2='1'
										>
											<stop
												offset='0%'
												stopColor='rgb(0, 212, 142)'
												stopOpacity='0.7'
											/>
											<stop
												offset='100%'
												stopColor='rgb(0, 212, 142)'
												stopOpacity='0.1'
											/>
										</linearGradient>
									</defs>
								</svg>
							</div>

							<div className='text-5xl font-bold text-emerald-600 mb-2'>
								{Math.round(cupsCount).toLocaleString()}
							</div>
							<p className='text-gray-600'>cups wasted today</p>
						</div>

						{/* Trees Impact Visualization */}
						<div className='bg-white rounded-2xl shadow-xl p-8'>
							<div className='flex items-center justify-between mb-6'>
								<div>
									<h3 className='text-2xl font-bold text-gray-900'>
										Daily Tree Consumption
									</h3>
									<p className='text-gray-600'>
										Trees cut down for paper cups per day
									</p>
								</div>
								<Tree className='w-12 h-12 text-emerald-600' />
							</div>

							<div className='relative h-48 mb-4'>
								{/* Tree visualization */}
								<div className='flex items-end justify-around h-full'>
									{[...Array(10)].map((_, i) => (
										<div
											key={i}
											className='w-6 bg-[#00d48e] rounded-t-lg transition-all duration-1000'
											style={{
												height: `${Math.min(
													100,
													(treesCount / 55000) * 100 * ((i + 1) / 10)
												)}%`,
												opacity: 0.3 + i * 0.07,
											}}
										/>
									))}
								</div>
							</div>

							<div className='text-5xl font-bold text-emerald-600 mb-2'>
								{Math.round(treesCount).toLocaleString()}
							</div>
							<p className='text-gray-600'>trees cut down today</p>
						</div>
						<div className='bg-white rounded-2xl shadow-xl p-8'>
							<div className='flex items-center justify-between mb-6'>
								<div>
									<h3 className='text-2xl font-bold text-gray-900'>
										Daily Paper Cup Waste
									</h3>
									<p className='text-gray-600'>
										Disposable cups used per day globally
									</p>
								</div>
								<Coffee className='w-12 h-12 text-emerald-600' />
							</div>
							<div></div>
						</div>
					</div>

					<div className='mt-12 text-center text-[#FBF5F3]'>
						<p className='max-w-2xl mx-auto'>
							These statistics are based on global estimates. The actual numbers
							might be even higher. Every small change in our daily habits can
							make a significant impact on our environment.
						</p>
					</div>
				</div>
			</section>
		</BaseLayout>
	);
}
