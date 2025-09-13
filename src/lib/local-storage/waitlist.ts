'use server';

import { promises as fs } from 'fs';
import path from 'path';

const WAITLIST_FILE = path.join(process.cwd(), 'data', 'waitlist.json');

interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
}

// Ensure the data directory exists
async function ensureDataDirectory() {
  const dataDir = path.dirname(WAITLIST_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read waitlist data from file
async function readWaitlistData(): Promise<WaitlistEntry[]> {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(WAITLIST_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    // If file doesn't exist or is empty, return empty array
    return [];
  }
}

// Write waitlist data to file
async function writeWaitlistData(data: WaitlistEntry[]): Promise<void> {
  await ensureDataDirectory();
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// Generate a simple UUID-like string
function generateId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

export async function addToWaitlist(email: string) {
  try {
    const waitlistData = await readWaitlistData();
    
    // Check if email already exists
    const existing = waitlistData.find(entry => entry.email === email);
    if (existing) {
      return { success: false, error: 'Email already exists in waitlist' };
    }

    // Add new entry
    const newEntry: WaitlistEntry = {
      id: generateId(),
      email,
      created_at: new Date().toISOString()
    };

    waitlistData.push(newEntry);
    await writeWaitlistData(waitlistData);

    return { success: true };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { success: false, error: 'Failed to add to waitlist' };
  }
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const waitlistData = await readWaitlistData();
    return waitlistData.length;
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    return 0;
  }
}

export async function getWaitlistEntries(): Promise<WaitlistEntry[]> {
  try {
    return await readWaitlistData();
  } catch (error) {
    console.error('Error getting waitlist entries:', error);
    return [];
  }
}