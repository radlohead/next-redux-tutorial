import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <Link href="/"><span>Index page |</span></Link>
            <Link href="/a"><span>A page |</span></Link>
            <Link href="/b"><span>B page</span></Link>
        </div>
    )
}

export default Index;