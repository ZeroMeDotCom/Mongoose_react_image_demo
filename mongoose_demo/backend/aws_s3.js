import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const fetchPresignedUrl = async () => {
    const client = new S3Client({ region: 'ap-southeast-2' }); // Replace with your region
    const bucketName = 'uekidemobucket'; // Your bucket name
    const objectKey = 'Ueki 2024-11-18 at 7.39.22.png'; // Your image file name

    const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: objectKey,
    });

    try {
        const url = await getSignedUrl(client, command, { expiresIn: 3600 }); // URL valid for 1 hour
        console.log('Presigned Image URL:', url);
    } catch (err) {
        console.error('Error generating presigned URL:', err);
    }
};

fetchPresignedUrl();